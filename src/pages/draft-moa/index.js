import Head from "next/head";
import blocks from "@/data/draftMoaContent.json";
import styles from "@/styles/DraftMoa.module.css";

function runToStyle(run) {
  const style = {
    fontWeight: run.bold ? 700 : 400,
    fontStyle: run.italic ? "italic" : "normal",
    fontSize: `${run.sizePt}pt`,
    color: `#${run.color}`,
    textTransform: run.caps ? "uppercase" : "none",
  };
  if (run.underline) style.textDecoration = "underline";
  else if (run.strike) style.textDecoration = "line-through";
  if (run.vertAlign === "superscript") {
    style.verticalAlign = "super";
    style.fontSize = `${run.sizePt * 0.7}pt`;
  } else if (run.vertAlign === "subscript") {
    style.verticalAlign = "sub";
    style.fontSize = `${run.sizePt * 0.7}pt`;
  }
  return style;
}

function Runs({ runs }) {
  return runs.map((run, i) => (
    <span
      key={i}
      className={`${styles.run} ${run.rtl ? styles.rtl : ""}`}
      style={runToStyle(run)}
      dir={run.rtl ? "rtl" : undefined}
      lang={run.rtl ? "ar" : undefined}
    >
      {run.text}
    </span>
  ));
}

function Paragraph({ block, index }) {
  const alignMap = { justify: "justify", center: "center", right: "right", left: "left" };
  const textAlign = alignMap[block.align] || "left";

  if (block.isHeading) {
    const Tag = block.headingLevel === "1" ? "h2" : block.headingLevel === "2" ? "h3" : "h4";
    const className =
      block.headingLevel === "1" ? styles.heading1 : block.headingLevel === "2" ? styles.heading2 : styles.heading3;
    return (
      <Tag className={className} style={{ textAlign }}>
        <Runs runs={block.runs} />
      </Tag>
    );
  }

  const isTitleLine = index < 9;

  return (
    <p
      className={isTitleLine ? styles.titleBlock : styles.paragraph}
      style={{ textAlign, paddingLeft: block.indentPx ? `${block.indentPx}px` : undefined }}
    >
      <Runs runs={block.runs} />
    </p>
  );
}

function Table({ block }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <tbody>
          {block.rows.map((row, ri) => {
            const isHeaderRow = ri === 0;
            const isCategoryRow = !isHeaderRow && row.length === 3 && row[1].length === 0 && row[2].length === 0;
            return (
              <tr
                key={ri}
                className={isHeaderRow ? styles.tableHeaderRow : isCategoryRow ? styles.tableCategoryRow : ""}
              >
                {row.map((cellParas, ci) => (
                  <td key={ci}>
                    {cellParas.map((p, pi) => (
                      <span key={pi} style={{ display: "block" }}>
                        <Runs runs={p.runs} />
                      </span>
                    ))}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function DraftMoa() {
  return (
    <>
      <Head>
        <title>Islamabad High Court Bar Association: Draft Memorandum of Association</title>
      </Head>

      <section className="w-full">
        <div className="text-center mb-8 md:mb-10">
          <h1
            className="basker"
            style={{
              fontSize: "clamp(28px, 4vw, 56px)",
              lineHeight: "95%",
              letterSpacing: "-0.04em",
              color: "#1E1E1E",
              visibility: "hidden",
            }}
          >
            Draft Memorandum of Association
          </h1>
        </div>
      </section>

      <section className={styles.page}>
        <div className={styles.paper}>
          {blocks.map((block, i) =>
            block.type === "table" ? <Table key={i} block={block} /> : <Paragraph key={i} block={block} index={i} />
          )}
        </div>
      </section>
    </>
  );
}

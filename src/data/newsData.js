const newsData = [
  {
    id: 1,
    slug: "directory-form",
    image: "/news-updates.png",
    title: "Directory Form",
    date: "Monday, 14-Apr-2025",
    body: [
      "The Islamabad High Court Bar Association has issued the official Directory Form for all enrolled advocates. This form is required for updating lawyers' data in the IHCBA directory for the year 2025.",
      "All members are requested to fill out the form with accurate and up-to-date personal and professional information, including current contact details, practice areas, and enrollment numbers.",
      "Completed forms should be submitted to the IHCBA office at Constitution Avenue, G-5/1, Islamabad before the stipulated deadline. Members who fail to submit their forms within the deadline will not be included in the updated directory.",
      "For further information or assistance regarding the form, members may contact the IHCBA secretariat during office hours. The Association urges all members to cooperate and ensure timely submission to facilitate a smooth update process.",
    ],
  },
  {
    id: 2,
    slug: "notice-for-directory",
    image: "/news-updates.png",
    title: "Notice For Directory",
    date: "Thursday, 10-Apr-2025",
    body: [
      "This is a formal notice issued by the Islamabad High Court Bar Association regarding the final date for submission of directory update forms. The final date for submission is 19th April 2025.",
      "Members who have not yet submitted their directory forms are strongly urged to do so at the earliest. The IHCBA will not entertain any requests for inclusion after the final date has passed.",
      "The directory will be published digitally and in print format for distribution among all enrolled members and relevant judicial institutions. Accuracy of the information is the responsibility of each individual member.",
      "The IHCBA Secretariat will be open from 9:00 AM to 5:00 PM Monday through Friday to receive forms and answer any queries. Members may also reach out via the official email address for further guidance.",
    ],
  },
  {
    id: 3,
    slug: "died-notice-senior-advocate",
    image: "/news-updates.png",
    title: "DIED NOTICE",
    date: "Saturday, 08-Mar-2025",
    body: [
      "It is with profound grief and sorrow that the Islamabad High Court Bar Association announces the passing of Senior Advocate of the Supreme Court of Pakistan and Former District & Session Judge, SABAH MOHIUDDIN KHAN.",
      "The deceased was a distinguished member of the legal fraternity and served the Bar with dedication, integrity, and unmatched professionalism for several decades. His contributions to the legal community and the judiciary will be remembered for years to come.",
      "The funeral prayers were held at his residence and were attended by a large number of colleagues, friends, and members of the Bar. The IHCBA extends its heartfelt condolences to the bereaved family.",
      "May his soul rest in eternal peace. The Association requests members to offer Fatiha for the departed soul and stand in solidarity with the grieving family during this difficult time.",
    ],
  },
  {
    id: 4,
    slug: "died-notice-brother",
    image: "/news-updates.png",
    title: "Died Notice",
    date: "Tuesday, 04-Mar-2025",
    body: [
      "The Islamabad High Court Bar Association announces with deep sorrow the passing of the brother of Wajid Ali Abbasi, Advocate, an esteemed member of our legal community.",
      "The deceased was widely respected among the community and will be fondly remembered by all who knew him. The Bar Association expresses its deepest sympathies to Wajid Ali Abbasi and his entire family.",
      "The funeral prayers were held in accordance with Islamic rites and were attended by members of the Bar who came to pay their respects and offer condolences to the grieving family.",
      "IHCBA requests all members to pray for the eternal peace of the departed soul and to support the bereaved family in their time of sorrow. May Allah grant him Jannat ul Firdous and give the family patience to bear this loss.",
    ],
  },
  {
    id: 5,
    slug: "annual-dues-ihcba",
    image: "/news-updates.png",
    title: "Annual Dues IHCBA",
    date: "Thursday, 10-Oct-2024",
    body: [
      "The Islamabad High Court Bar Association has issued an important notice regarding the payment of annual dues for all enrolled advocates. The final date for payment to be included in the Eligible Voter List is 30th October, 2024.",
      "All members who wish to exercise their right to vote in the upcoming elections are required to clear their outstanding annual dues before the specified deadline. Members with unpaid dues will not be eligible to appear on the voter list.",
      "Payment can be made at the IHCBA office during working hours. Members are advised to retain their payment receipts as proof of payment. No extensions will be granted beyond the final date under any circumstances.",
      "The IHCBA urges all members to fulfill their financial obligations to the Association in a timely manner. Keeping dues current ensures the smooth functioning of the Bar and enables the Association to continue delivering quality services to its members.",
    ],
  },
  {
    id: 6,
    slug: "eid-milad-un-nabi",
    image: "/news-updates.png",
    title: "Eid Milad-Un-Nabi",
    date: "Friday, 13-Sep-2024",
    body: [
      "The Islamabad High Court Bar Association announces that 12th Rabi-ul-Awwal, the blessed occasion of Eid Milad-Un-Nabi (Peace Be Upon Him), has been declared a public holiday.",
      "All offices of the IHCBA and associated departments will remain closed on this day in observance of the birth anniversary of the Holy Prophet Muhammad (PBUH). No official business will be conducted.",
      "The Association extends warm greetings to all members and their families on this auspicious occasion. May the blessings of the Holy Prophet (PBUH) be upon us all and may peace, prosperity, and justice prevail throughout the nation.",
      "Members are encouraged to participate in the religious gatherings and commemorations being held across the city to celebrate this blessed occasion with reverence and devotion.",
    ],
  },
  {
    id: 7,
    slug: "construction-project-update",
    image: "/blog1.png",
    title: "Construction Project Completion by July 31, 2025",
    date: "Dated 29th April, 2025",
    body: [
      "The contractor assured that the ongoing project, including the Library, Bar Office, Bar Room, President Office, Secretary Office, Committee Room, and Parking will be completed by July 31, 2025.",
      "The association has been closely monitoring the progress and all stakeholders have been informed of the timeline. Members are encouraged to remain patient as the facilities are brought to completion.",
    ],
  },
  {
    id: 8,
    slug: "mobahisa",
    image: "/blog1.png",
    title: "Mobahisa",
    date: "Dated 29th April, 2025",
    body: [
      "A debate competition on resolution topic \"صاف کتاب\" was held at the Islamabad High Court Bar Association premises.",
      "The event saw enthusiastic participation from members and young advocates. The competition aimed to encourage critical thinking and public speaking skills among the legal fraternity.",
    ],
  },
  {
    id: 9,
    slug: "front-page",
    image: "/blog1.png",
    title: "Front Page",
    date: "Dated 29th April, 2025",
    body: [
      "Front Page news coverage of the Islamabad High Court Bar Association's latest activities.",
    ],
  },
  {
    id: 10,
    slug: "meeting-with-registrar-ihc",
    image: "/news-updates.png",
    title: "Meeting With Registrar Islamabad High Court",
    date: "Tuesday, 27-Aug-2024",
    body: [
      "The President and Cabinet of the Islamabad High Court Bar Association held a formal meeting with the Registrar of the Islamabad High Court to discuss various pressing issues faced by the Bar and its members.",
      "The meeting covered a wide range of topics including delays in case scheduling, improvements to the court's digital filing system, allocation of additional courtrooms, and resolution of administrative bottlenecks affecting the day-to-day functioning of the Bar.",
      "The Registrar assured the IHCBA delegation that the concerns raised would be taken up with the relevant authorities and that sincere efforts would be made to resolve the outstanding issues at the earliest opportunity.",
      "The IHCBA expresses its gratitude to the Registrar for his time and cooperation. The Association remains committed to working in close collaboration with the judiciary to improve the overall legal environment and ensure justice is accessible to all.",
    ],
  },
  {
    id: 11,
    slug: "cabinet-ihcba",
    image: "/news-updates.png",
    title: "Cabinet IHCBA",
    date: "Wednesday, 28-Feb-2024",
    body: [
      "The Islamabad High Court Bar Association has formally notified its members of the newly constituted Cabinet following the recently concluded elections. The notice is dated 26th February, 2024.",
      "The newly elected Cabinet has assumed its responsibilities and is committed to serving the members of the Bar with dedication, transparency, and professionalism. A series of meetings have already been held to set priorities for the upcoming term.",
      "The IHCBA Cabinet will focus on key areas including improving legal aid services, enhancing library and research facilities, resolving administrative issues, and strengthening the Association's relationship with the judiciary and the bar councils.",
      "All members are encouraged to reach out to the Cabinet with their concerns and suggestions. The new leadership pledges an open-door policy and welcomes constructive dialogue to advance the interests of the legal community in Islamabad.",
    ],
  },
  {
    id: 12,
    slug: "final-notice-dues",
    image: "/news-updates.png",
    title: "Final Notice Dues",
    date: "Monday, 04-Dec-2023",
    body: [
      "The Islamabad High Court Bar Association issues this final notice to all members regarding the payment of Annual Dues for the preparation of the Eligible Voter List for the upcoming Bar elections.",
      "This is the final reminder and no further extension will be granted. Members who fail to pay their dues by the final date will be ineligible to vote in the forthcoming elections and their names will not appear on the official voter list.",
      "Members are urged to visit the IHCBA office immediately and settle any outstanding dues. The accounts department is available during all working hours to assist members with payment and receipt generation.",
      "The IHCBA stresses the importance of this matter and requests all members to take this notice seriously. Your participation in Bar elections is a fundamental right that can only be exercised if dues are cleared in time. Please act without further delay.",
    ],
  },
];

export function getNewsBySlug(slug) {
  return newsData.find((n) => n.slug === slug) || newsData[0];
}

export function getOtherNews(excludeSlug, count = 3) {
  return newsData.filter((n) => n.slug !== excludeSlug).slice(0, count);
}

export default newsData;

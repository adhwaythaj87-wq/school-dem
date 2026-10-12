# School Website Configuration Guide

This website is completely driven by a single configuration file located in the root directory:
👉 **[`school.config.json`](./school.config.json)**

Whenever you update the school name, location, contact numbers, principal details, or affiliation codes in `school.config.json`, the **entire website** automatically updates everywhere.

---

## Configuration Fields

### 1. School Identity
```json
"schoolName": {
  "en": "Mar Baselios Memorial Higher Secondary School"
},
"shortName": {
  "en": "Mar Baselios HSS"
},
"abbreviation": "MBM",
"motto": {
  "en": "Faith, Truth, and Service"
},
"foundedYear": 1954,
"management": "Corporate Management of Orthodox Syrian Church"
```
- **`schoolName`**: Full institutional name used in the top header, about section, metadata, and footer.
- **`shortName`**: Compact name used on mobile navigation and headers.
- **`abbreviation`**: Short acronym (e.g. `MBM`) used on campus badges.
- **`foundedYear`**: Year of establishment (calculates service years automatically).

---

### 2. Location & Campus Address
```json
"location": {
  "en": "Pala, Kottayam, Kerala",
  "city": "Pala",
  "subDistrict": "Meenachil Taluk",
  "district": "Kottayam",
  "state": "Kerala",
  "pinCode": "686575",
  "streetAddress": "College Road",
  "address": "College Road, Pala, Kottayam District, Kerala - 686575, India"
}
```
- Used across the header bar, contact directory, address schema, and footer.

---

### 3. Board & Affiliation Codes
```json
"affiliation": {
  "board": "Kerala State Board of Education",
  "schoolCode": "05042",
  "higherSecondaryCode": "05018",
  "subDistrict": "Meenachil Taluk",
  "grades": "Classes 1 to 12 (LP, UP, HS & HSS)",
  "medium": "English (Kerala State Syllabus)"
}
```
- Displayed in the Official Institutional Records table, footer affiliation list, and SEO meta tags.

---

### 4. Principal's Desk
```json
"principal": {
  "name": "Rev. Fr. Mathew Karottu",
  "shortName": "Fr. Mathew Karottu",
  "qualifications": "M.Sc., M.Ed., M.Phil.",
  "designation": "Principal & Head of Institution",
  "photo": "/images/principal.jpg",
  "deskTitle": "Seventy years rooted in disciplined study and quiet service",
  "messageParagraphs": [
    "Dear Parents, Guardians, and Students,",
    "Founded in 1954...",
    "Our teachers work closely..."
  ]
}
```
- Updates the Principal's photo, qualifications, title, message paragraphs, and signoff signature.

---

### 5. Official Records & Statistics
```json
"statistics": {
  "studentCount": "1,450 Students",
  "staffCount": "68 Staff Members",
  "campusSize": "4.5-acre campus",
  "serviceYears": "72 Years of Service"
}
```

---

### 6. Office Contact & Social Media
```json
"contact": {
  "phone": "+91 4822 212450",
  "altPhone": "+91 4822 212451",
  "email": "info@example.com",
  "officeHours": "Monday to Friday: 9:00 AM - 4:30 PM",
  "address": "College Road, Pala, Kottayam District, Kerala - 686575, India",
  "whatsappNumber": "919447123450",
  "whatsappUrl": "https://wa.me/919447123450?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
}
```
- Used in the top utility strip, admissions buttons, contact directory, and footer.

---

### 7. Admissions Session & Deadlines
```json
"admissions": {
  "academicYear": "2026–27",
  "badge": "Academic Year 2026–27",
  "headline": "Admissions Open for Classes 1, 5 and 11 (2026–27)",
  "subhead": "Application forms available at the school office counter and online until 15 May 2026. Higher Secondary Science (PCMB/PCMC) and Commerce streams.",
  "classesOffered": "Admissions for Classes 1, 5, 8 & Plus One (Science and Commerce)",
  "counterTimings": "Monday to Friday, 9:00 AM to 4:00 PM"
}
```
- Used in hero carousel callout cards, top utility badge, and the admissions session band.

---

### 8. Interactive Maps
```json
"mapEmbedUrl": "https://www.google.com/maps/embed?...",
"mapExternalUrl": "https://maps.google.com/?q=Pala+Kottayam+Kerala"
```

---

## How to Apply Changes

1. Open **`school.config.json`**.
2. Edit your school details.
3. Save the file.
4. Run `npm run build` (or `npm run dev` to preview live).

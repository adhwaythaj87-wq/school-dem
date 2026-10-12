import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Dual-language string schema: ml is strictly optional with fallback to en
export const i18nStringSchema = z.object({
  en: z.string(),
  ml: z.string().optional()
});

export type I18nString = z.infer<typeof i18nStringSchema>;

// Helper to resolve string
export function resolveI18n(
  val: I18nString | string | undefined,
  _lang?: string
): { text: string; isFallback: boolean } {
  if (!val) return { text: '', isFallback: false };
  if (typeof val === 'string') return { text: val, isFallback: false };
  return { text: val.en, isFallback: false };
}

// Strictly validated ISO YYYY-MM-DD date regex
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// Collection Definitions
const notices = defineCollection({
  loader: file('src/data/notices.json'),
  schema: z.object({
    id: z.string(),
    title: i18nStringSchema,
    date: z.string().regex(dateRegex, 'Date must be in YYYY-MM-DD format'),
    category: z.enum(['Academic', 'Circular', 'Exam', 'General']),
    urgent: z.boolean().default(false),
    fileUrl: z.string().optional(),
    content: i18nStringSchema.optional()
  })
});

const news = defineCollection({
  loader: file('src/data/news.json'),
  schema: z.object({
    id: z.string(),
    title: i18nStringSchema,
    date: z.string().regex(dateRegex, 'Date must be in YYYY-MM-DD format'),
    excerpt: i18nStringSchema,
    image: z.string(),
    featured: z.boolean().default(false)
  })
});

const events = defineCollection({
  loader: file('src/data/events.json'),
  schema: z.object({
    id: z.string(),
    title: i18nStringSchema,
    date: z.string().regex(dateRegex, 'Date must be in YYYY-MM-DD format'),
    time: z.string(),
    venue: i18nStringSchema
  })
});

const faculty = defineCollection({
  loader: file('src/data/faculty.json'),
  schema: z.object({
    id: z.string(),
    name: i18nStringSchema,
    designation: i18nStringSchema,
    department: z.string(),
    qualification: z.string(),
    experienceYears: z.number().nonnegative('Experience years must be non-negative'),
    photo: z.string().optional()
  })
});

const academics = defineCollection({
  loader: file('src/data/academics.json'),
  schema: z.object({
    id: z.string(),
    title: i18nStringSchema,
    level: z.string(),
    stream: z.string().optional(),
    description: i18nStringSchema,
    subjects: z.array(i18nStringSchema),
    seats: z.number().positive().optional()
  })
});

const admissions = defineCollection({
  loader: file('src/data/admissions.json'),
  schema: z.object({
    id: z.string(),
    title: i18nStringSchema,
    academicYear: z.string(),
    dates: z.array(z.object({
      event: i18nStringSchema,
      date: z.string()
    })),
    feeStructure: z.array(z.object({
      grade: z.string(),
      tuitionFeePerTerm: z.string(),
      specialFeeAnnual: z.string(),
      cautionDeposit: z.string()
    })),
    guidelines: z.array(i18nStringSchema)
  })
});

const gallery = defineCollection({
  loader: file('src/data/gallery.json'),
  schema: z.object({
    id: z.string(),
    title: i18nStringSchema,
    image: z.string(),
    category: z.string(),
    aspectRatio: z.enum(['16/9', '4/3', '1/1', '3/2', '16/10']).default('16/9')
  })
});

const toppers = defineCollection({
  loader: file('src/data/toppers.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    stream: z.string(),
    score: z.string(),
    year: z.string(),
    achievement: i18nStringSchema
  })
});

const faqs = defineCollection({
  loader: file('src/data/faqs.json'),
  schema: z.object({
    id: z.string(),
    question: i18nStringSchema,
    answer: i18nStringSchema
  })
});

const heroSlides = defineCollection({
  loader: file('src/data/hero-slides.json'),
  schema: z.object({
    id: z.string(),
    image: z.string(),
    alt: i18nStringSchema,
    caption: i18nStringSchema
  })
});

export const collections = {
  notices,
  news,
  events,
  faculty,
  academics,
  admissions,
  gallery,
  toppers,
  faqs,
  heroSlides
};

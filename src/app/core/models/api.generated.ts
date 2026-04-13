import { z } from 'zod';

export const LoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const LoginResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    user: z.object({
      id: z.string(),
      email: z.string().email(),
      name: z.string().optional(),
    }),
  }).nullable(),
  error: z.object({
    code: z.string(),
    message: z.string(),
  }).nullable(),
});

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  imageUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const CreateProjectRequestSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(1000),
  techStack: z.array(z.string()).min(1),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  imageUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
});

export const MessageSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  content: z.string(),
  read: z.boolean().default(false),
  createdAt: z.string(),
});

export const SendMessageRequestSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  content: z.string().min(1).max(2000),
});

export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type CreateProjectRequest = z.infer<typeof CreateProjectRequestSchema>;
export type Message = z.infer<typeof MessageSchema>;
export type SendMessageRequest = z.infer<typeof SendMessageRequestSchema>;

export const ApiErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  requestId: z.string().optional(),
});

export type ApiError = z.infer<typeof ApiErrorSchema>;


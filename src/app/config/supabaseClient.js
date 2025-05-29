// Import the createClient function from Supabase JS library
// This is the main entry point for Supabase client-side operations
import { createClient } from '@supabase/supabase-js'

// Get Supabase configuration from environment variables
// These variables should be set in your .env.local file
// SUPABASE_URL: Your project's URL (e.g., https://your-project.supabase.co)
// SUPABASE_ANON_KEY: Your project's anon/public key
const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

// Validate that required environment variables are present
// This prevents runtime errors if the environment is not properly configured
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase environment variables are missing!');
}

// Create and export a single instance of the Supabase client
// This client will be used throughout the application for:
// - Authentication (sign in, sign up, password reset)
// - Database operations (CRUD operations on tables)
// - Real-time subscriptions
// - Storage operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
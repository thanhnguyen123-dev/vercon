import { createClient } from "@/utils/supabase/server";

export const supabase = await createClient();
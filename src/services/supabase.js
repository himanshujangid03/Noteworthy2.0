import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wjdktclbsjjtquswszoj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZGt0Y2xic2pqdHF1c3dzem9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyODI5NTksImV4cCI6MjAyMjg1ODk1OX0.ibTIbFfZDyZmeEi4aWFFXn821GvMYf3-x9Qo1KySJGI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gonkolbxsaadkmuxbrak.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbmtvbGJ4c2FhZGttdXhicmFrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzQ0MjExNiwiZXhwIjoyMDEzMDE4MTE2fQ.VMES0dkYkHGVeeK4Yca5tieHf5d0U5Ed-QYc8fVLX2E"
);

export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mvuthwcufhdtydfylfon.supabase.co";
const supabaseKey = "sb_publishable_Xo7VVeff8Bu1Co8nhNOS9g_-klcn93Z";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

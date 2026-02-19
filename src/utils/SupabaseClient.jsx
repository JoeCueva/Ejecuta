import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://emxnedyziyhmfuhvtyci.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteG5lZHl6aXlobWZ1aHZ0eWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NTk4NDYsImV4cCI6MjA4NjMzNTg0Nn0.MUTf3e1w3RW74sP4HyXyP5QjPd2M_k_myAWOAnCz4tE';


export const supabase = createClient(supabaseUrl, supabaseKey);


import { createClient } from '@supabase/supabase-js';

// Incolla qui l'URL e la Key che hai appena copiato
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Configuriamo le opzioni per includere il tuo schema personalizzato
const options = {
  db: {
    schema: 'sito-personale-portfolio',
  },
};

// Creiamo l'istanza del client per usarla in tutta l'app
export const supabase = createClient(supabaseUrl, supabaseAnonKey, options);
import { createClient } from "@supabase/supabase-js"

const supabase = createClient("https://akexkcjzgnlqlqrfxtdi.supabase.co", "sb_publishable_f9sKJUhh5ppG4tIyAXvF6A_hArSH2Af")

const main = async () => {
  const res_check_id_null = await supabase.from("data").select().eq("id", "111")
   console.log(res_check_id_null.data.length)
}

main()


import { createClient } from "@supabase/supabase-js"

const supabase = createClient("https://akexkcjzgnlqlqrfxtdi.supabase.co", "sb_publishable_f9sKJUhh5ppG4tIyAXvF6A_hArSH2Af")

const main = async () => {
  const { data } = await supabase.from("users").select("*")
  console.log(data)
}

main()


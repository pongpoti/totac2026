import { createClient } from "@supabase/supabase-js"

const supabase = createClient("https://akexkcjzgnlqlqrfxtdi.supabase.co", "sb_publishable_f9sKJUhh5ppG4tIyAXvF6A_hArSH2Af")

const main = async () => {
    const { error } = await supabase.from("data").insert({ id: 11, email: "apsdofadf", vdo_json: { vdo1: 0, vdo2: 0, vdo3: 0, vdo4: 0, vdo5: 0, vdo6: 0, vdo7: 0, vdo8: 0, vdo9: 0, vdo10: 0, vdo11: 0, vdo12: 0, vdo13: 0, vdo14: 0, vdo15: 0, vdo16: 0, vdo17: 0, vdo18: 0 } })
}

main()
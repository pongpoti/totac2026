import { createClient } from "@supabase/supabase-js"
import fuse from "fuse.js"
const supabase = createClient("https://vwpfuieqetmzjopzhetn.supabase.co", "sb_publishable_neva2oamaffoDv-ChO1wlA_bWlsrlYj")

const searchKeyword = async (keyword) => {
    const { data } = await supabase.from("agenda").select()
    const fuseOptions = {
        isCaseSensitive: false,
        ignoreLocation: true,
        threshold: 0.2,
        keys: [
            "section",
            "topic",
            "name_en",
            "name_th"
        ]
    }
    const search_array = (new fuse(data, fuseOptions)).search(keyword)
    console.log((search_array), search_array.length)
}

searchKeyword("ธนินท์ อนุ")
import express from "express"
import * as line from "@line/bot-sdk"
import axios from "axios"

const app = express()
const port = process.env.PORT || 3030
const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer ghXEhAvBnIVWM+YH7FdbugEGoW2IUV268U6Yhn+c5Szt7NCgZdZ1smtDfxx4UDx840KcwU4fb0D/Mzz9RCeJcitdSpvVp45Z0Jfp0RzFVCx3B0xFSOSyTLZ6fX0zJ404WeLNK8/xN/rHEyIkBd7CZgdB04t89/1O/w1cDnyilFU=",
}
const config = { channelSecret: "50dd6122944e61573f6aaaa76ad9ebbb" }
const client = new line.messagingApi.MessagingApiClient({
    channelAccessToken: "ghXEhAvBnIVWM+YH7FdbugEGoW2IUV268U6Yhn+c5Szt7NCgZdZ1smtDfxx4UDx840KcwU4fb0D/Mzz9RCeJcitdSpvVp45Z0Jfp0RzFVCx3B0xFSOSyTLZ6fX0zJ404WeLNK8/xN/rHEyIkBd7CZgdB04t89/1O/w1cDnyilFU=",
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.post("/line", line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err)
            res.status(500).end()
        })
})

const handleEvent = async (event) => {
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null)
    }
    try {
        await axios.post("https://api.line.me/v2/bot/chat/loading/start",
            { "chatId": event.source.userId },
            { headers: headers }
        )
    } catch (error) {
        console.error(error)
    }
    //
    const message = event.message.text.trim().toLowerCase()
    if (message === "coffee") {
        client.replyMessage({
            "replyToken": event.replyToken,
            "messages": [
                {
                    "type": "flex",
                    "altText": "คาเฟ่",
                    "contents": coffee_object
                }
            ]
        })
    } else if (message === "bakery") {
        client.replyMessage({
            "replyToken": event.replyToken,
            "messages": [
                {
                    "type": "flex",
                    "altText": "เบเกอรี่",
                    "contents": bakery_object
                }
            ]
        })
    } else if (message === "search") {
        client.replyMessage({
            "replyToken": event.replyToken,
            "messages": [
                {
                    "type": "text",
                    "text": "บริการนี้ยังไม่เปิดใช้งาน"
                }
            ]
        })
    } else if (message === "letter") {
        client.replyMessage({
            "replyToken": event.replyToken,
            "messages": [
                {
                    "type": "text",
                    "text": "บริการนี้ยังไม่เปิดใช้งาน"
                }
            ]
        })
    }
}

const coffee_object =
{
    "type": "carousel",
    "contents": [
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/10QQqWaT6X-FeQ-B_sEWOswBCWqTKuew-",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "เสือทิม คาเฟ่",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ถ. พิชัยสงคราม",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0958395433",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0958395433"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/QHnCnAtX2aVLq2at9"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        },
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/1nQzXM8EsTl7Aq2qzGybUAe7gLiybiCiC",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "Blue Craft Cafe",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ถ. ศรีธรรมไตรปิฎก",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0900603045",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0900603045"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/k3194dwCoeKfR7hM7"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        },
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/1fYhsJRLKHpsw700ysxkTkV6xUJn_II8T",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "Hope Coffee",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ถ. ศรีธรรมไตรปิฎก",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0888173785",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0888173785"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/rdpRiaLzcyXs6KuC8"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        },
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/1Wtl6F2KlScn4uEDxOHOdFVSSwTbM1FcR",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "Layers Cafe",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ถ. วิสุทธิกษัตริย์",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0903239869",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0903239869"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/FdrfpoXRAe6qcg337"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        },
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/1dGKsn7bwOlZxXjPr5mWfCbcApD0nqVCU",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "Tasteture",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ถ. ศรีธรรมไตรปิฎก",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0972818643",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0972818643"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/SLNZYpapBs1EJ85LA"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        },
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/1eUgiXsWoAHtqwjS7_KdTSEgxX_o3sHQa",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "The Key Cafe",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ถ. สิงหวัฒน์",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0613479988",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0972818643"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/RBHUGkVvEz2QayWA8"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        }
    ]
}

const bakery_object =
{
    "type": "carousel",
    "contents": [
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/1QSOyzKL_8owYpDgP-O2nZJgr-bnRedNL",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "กรี่ กะหรี่ปั๊บ",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ถ. นเรศวร",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0818877579",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0818877579"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/8RKe4fPH8Hwf6KNq5"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        },
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/1f3iqUFQUy34c-C1B_i5Tlu1pBnLVAGef",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "ขนมต้มวัดใหญ่",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ซ. เอกาทศรถ",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0956649916",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0956649916"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/8VjbhYXNrKMXicAs6"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        },
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/12NcOkeOMLWmL91WcFBlDcGdgSaNaVrXQ",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "ทับทิมกรอบสามหนุ่ม",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ถ. พระยาจักรี",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0986962369",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0986962369"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/tgPjtT9huZJw6mD2A"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        },
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/10qdZMZjWcSjN6a156LMHmrYEClHknqow",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "ปังกลม นมเพียว",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ถ. พระร่วง",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0846888824",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0846888824"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/3kwLXp49fVsec3zK6"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        },
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/1JPWtCbCH3OmIdmD4liR-k1Ii2bz3w4QG",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "สุนิสา กล้วยตาก",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ศูนย์รวมของฝาก วัดใหญ่",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0815341504",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0815341504"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/P8pgPRKJ1rHEnPfw9"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        },
        {
            "type": "bubble",
            "size": "hecto",
            "hero": {
                "type": "image",
                "url": "https://lh3.googleusercontent.com/d/1ojDg8acD10FHigl3oNipfCyhXiIbv6O2",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "1.5:1"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "ไอศครีมครูกุ้ง",
                        "align": "center",
                        "size": "lg",
                        "weight": "bold",
                        "style": "italic",
                        "offsetBottom": "sm"
                    },
                    {
                        "type": "separator",
                        "margin": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "ถ. บรมไตรโลกนารถ",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "0815333066",
                                "align": "center",
                                "action": {
                                    "type": "uri",
                                    "label": "action",
                                    "uri": "tel:0972818643"
                                },
                                "color": "#1f4591",
                                "offsetTop": "sm"
                            }
                        ],
                        "offsetTop": "md",
                        "offsetBottom": "none"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "google maps",
                                    "uri": "https://maps.app.goo.gl/VKNWuG1rX5nTUonW6"
                                },
                                "margin": "none",
                                "height": "sm",
                                "offsetTop": "md"
                            }
                        ],
                        "offsetTop": "sm"
                    }
                ],
                "offsetBottom": "none"
            }
        }
    ]
}


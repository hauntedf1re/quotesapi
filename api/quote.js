const quotes = require("../quotes.json");
const packageinfo = require("../package.json"); // switched from package > packageinfo because package is possibly reserved, broh.

export default function grq(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // CORS headers, broh.
    res.setHeader("Access-Control-Allow-Methods", "GET"); // CORS headers, broh.

    if (req.method !== "GET") { // handle false requests, broh.
        return res.status(405).json({
            status: "err 405",
            message: "OwO your method isnt allowed! >w< try GET instead! ^w^",
            allowedMethods: ["GET"]
        });
    }

    if (!quotes || quotes.length === 0) { // check if quotes.json is empty / not found, broh.
        return res.status(500).json({
            status: "err 500",
            message: "O_o no quotes found! add some quotes into quotes.json! ^3^"
        })
    }

    try {
            const randIndex = Math.floor(Math.random() * quotes.length);
            const selectedquote = quotes[randIndex]; // fixed an object error, broh.

            const response = { // look at my info!!! go to my github page and star all my shit or i will kill you, broh.
                status: "200 OK",
                api: packageinfo.name,
                version: packageinfo.version,
                author: packageinfo.author,
                generatedAt: new Date().toISOString(),

                quote: { // this your shit, broh?
                    id: randIndex + 1,
                    text: selectedquote.quote,
                    author: selectedquote.author
                },

                metadata: { // this is the meta, broh.
                    totalquotes: quotes.length,
                    truth: "femboys"
                }
            };

            res.status(200).json(response); // OK or Request Successful, broh.
    } catch (error) { // error handling, broh.
        return res.status(500).json({
            status: "err 500",
            message: "O_o something went vewy wrong! i couldnt generate a quote, sowwy... >_<",
            error: error.message
        });
    }
}
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    collection_id: string;
    start_eta: number;
};

type Error = {
    error: string;
};

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    const { search } = req.body;

    console.log("Search is >>> ", search);

    res.status(200).json({
        collection_id: "1234",
        start_eta: 1234,
    });
}
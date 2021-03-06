import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
    const { parentTconst } = req.query

    try {
        if (!parentTconst) {
            return res.status(400).json({ message: '`parentTconst` required' })
        }

        const results = await query(
            `
            select * from episodes 
            join ratings 
            on episodes.tconst = ratings.tconst 
            where parentTconst = ? 
            order by averageRating desc
          `,
            parentTconst
        )

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export default handler
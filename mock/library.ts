import { Request, Response } from '@umijs/deps/compiled/express';

export default {
  'POST /list': (req: Request, res: Response) => {
    console.log('[/list] query:', req.query, req.body);
    const { page, limit } = req.body;
    const data = {
      totalCount: 3,
      lastPage: true,
      pageSize: 20,
      totalPage: 1,
      currentPage: 1,
      list: [
        {
          name: 'd1199.jpg',
          uuid: 'd1199',
        },
      ],
    };
    res.send({
      code: 0,
      data,
    });
  },
};

import { Request, Response } from "express";
export declare class CategoryService {
    categoryRepository: any;
    constructor();
    findAllC: () => Promise<any>;
    saveCategory: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryService;
export default _default;

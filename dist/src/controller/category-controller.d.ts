import { Request, Response } from "express";
export declare class CategoryController {
    private categoryRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    showFormCategoryCreate: (req: any, res: any) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;

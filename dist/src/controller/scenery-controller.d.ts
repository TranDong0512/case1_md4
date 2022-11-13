import { Request, Response } from "express";
export declare class SceneryController {
    private sceneryService;
    private categoryService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    creatScenery: (req: Request, res: Response) => Promise<void>;
    deleteScenery: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    editS: (req: Request, res: Response) => Promise<void>;
    searchS: (req: Request, res: Response) => Promise<void>;
    searchCategory: (req: Request, res: Response) => Promise<void>;
}
declare const _default: SceneryController;
export default _default;

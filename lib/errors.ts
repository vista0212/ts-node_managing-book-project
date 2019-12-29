import { ErrorTypes } from "@Lib/types";

interface IError {
    name: string;
    code: number;
};

const Errors: { [key in ErrorTypes] : IError } = {
    Not_Found: {
        name: 'Not Found',
        code: 404,
    },
    Wrong_Data: {
        name: 'Wrong Data',
        code: 412,
    },
    Database_Error: {
        name: 'Database Error',
        code: 500,
    },
    Exist_Data: {
        name: 'Exist Data',
        code: 412,
    }
}

export default Errors;
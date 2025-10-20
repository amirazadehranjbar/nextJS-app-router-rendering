'use server'
import {revalidatePath, revalidateTag} from "next/cache";

const handleRevalidate = (type, value)=>{

    switch (type) {

        case "tag":
            revalidateTag(value)
            return;

        case "path":
            revalidatePath(value);
            return;

    }

};

export default handleRevalidate;
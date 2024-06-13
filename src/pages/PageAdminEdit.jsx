import { FontSize, FontWeight } from "../constants/editSource";

import Input from "../components/Input";

export default function PageAdminEdit() {
    return (
        <div className="mt-20">
            <div className="w-[60%] flex flex-col mx-auto gap-6">
                <p className={`${FontSize[20]} ${FontWeight[1]}`}>
                    Find Users
                </p>
                <Input
                bgColor="white" textColor="black" placeholderColor="gray200"
                placeholder={'name'}
                />
            </div>
        </div>
    )
}
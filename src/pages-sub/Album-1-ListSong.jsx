
export default function ListSong() {
    return (
        // <div>
        //     {/* // Table */}
        //     <div className="grid grid-cols-4 gap-px bg-gray-200">
        //         {/* <!-- Table Header --> */}
        //         <div className="bg-gray-300 p-4 font-bold">Header 1</div>
        //         <div className="bg-gray-300 p-4 font-bold">Header 2</div>
        //         <div className="bg-gray-300 p-4 font-bold">Header 3</div>
        //         <div className="bg-gray-300 p-4 font-bold">Header 4</div>
        //         {/* <!-- Table Row 1 --> */}
        //         <div className="bg-white p-4">Row 1, Cell 1</div>
        //         <div className="bg-white p-4">Row 1, Cell 2</div>
        //         <div className="bg-white p-4">Row 1, Cell 3</div>
        //         <div className="bg-white p-4">Row 1, Cell 4</div>
        //         {/* <!-- Table Row 2 --> */}
        //         <div className="bg-white p-4">Row 2, Cell 1</div>
        //         <div className="bg-white p-4">Row 2, Cell 2</div>
        //         <div className="bg-white p-4">Row 2, Cell 3</div>
        //         <div className="bg-white p-4">Row 2, Cell 4</div>
        //         {/* <!-- Table Row 3 --> */}
        //         <div className="bg-white p-4">Row 3, Cell 1</div>
        //         <div className="bg-white p-4">Row 3, Cell 2</div>
        //         <div className="bg-white p-4">Row 3, Cell 3</div>
        //         <div className="bg-white p-4">Row 3, Cell 4</div>
        //     </div>
        // </div>
        <div className='w-[100%]'>
            <table className="w-[100%] table-auto">
                <thead>
                    <tr className="bg-black text-white">
                        <th className="w-[5%]">No.</th>
                        <th id="th2">Title</th>
                        <th id="th3" className="w-[35%]">Writer</th>
                        <th className="w-[10%]">Length</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="td1">1.</td>
                        <td id="td2">Introduction Where Idiot Should Go</td>
                        <td id="td3">Takahiro</td>
                        <td id="td4">1:12</td>
                    </tr>
                    <tr>
                        <td id="td1">2.</td>
                        <td id="td2">Introduction Where Idiot Should Go</td>
                        <td id="td3">Takahiro</td>
                        <td id="td4">1:12</td>
                    </tr>
                    <tr>
                        <td id="td1">3.</td>
                        <td id="td2">Introduction Where Idiot Should Go</td>
                        <td id="td3">Takahiro</td>
                        <td id="td4">1:12</td>
                    </tr>
                    <tr>
                        <td id="td1">4.</td>
                        <td id="td2">Introduction Where Idiot Should Go</td>
                        <td id="td3">Takahiro</td>
                        <td id="td4">1:12</td>
                    </tr>
                    <tr>
                        <td id="td1">5.</td>
                        <td id="td2">Introduction Where Idiot Should Go</td>
                        <td id="td3">Takahiro</td>
                        <td id="td4">1:12</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
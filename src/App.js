import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import Table from "./Components/Table";
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";

function App() {
    const [datapost, setDataPost] = useState([]);
    // const [dataComment, setDataComment] = useState();
    // const [comment, setComment] = useState([]);
    // const [test, setTest] = useState();

    //Fetching data from api
    // Using useEffect to call the API once mounted and set the data
    // useEffect(() => {
    //     const result = axios("https://jsonplaceholder.typicode.com/posts");
    //     setDataPost(result.data);
    //     // postID.map((el) => {
    //     //     const res = await axios(
    //     //         `https://jsonplaceholder.typicode.com/posts/${el.id}/comments`
    //     //     );
    //     //     setComment(res.data);
    //     // });
    // }, [datapost]);

    const getPosts = async () => {
        await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setDataPost(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    // const getComment = () => {
    //     let i=0
    //     while (test!==[]) {
    //         axios
    //            .get(`https://jsonplaceholder.typicode.com/posts/${i}/comments`)
    //            .then((res) => {
    //                 setTest(res.data)
    //                setComment((prevState)=>[...prevState,res.data]);
    //            })
    //            .catch((err) => console.log(err));
    //         i++
    //     }
    // };

    useEffect(() => {
        getPosts();
        // getComment()
    }, []);

    // useEffect(() => {
    //     setDataComment();
    // }, []);

    // const postID = datapost?.map((el) => el.id);
    // console.log(postID)
    // console.log(comment);
    // console.log(datapost);
    // setComment()

    const data = useMemo(() => [...datapost], [datapost]);

    const columns = useMemo(
        () => [
            {
                Header: "Title",
                accessor: "title",
            },
            {
                Header: "Body",
                accessor: "body",
            },
        ],
        []
    );
    const tableInstance = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 },
        },

        useGlobalFilter,
        useSortBy,
        usePagination
    );
    return (
        //Fetching data from api
        //install react-table
        //Store data in react table
        //Columns are `Title` and `Body` ,
        //Pagination
        //Sort data
        //Filter Data

        <div className="App">
            <Table
                columns={columns}
                data={data}
                tableInstance={tableInstance}
            />
        </div>
    );
}

export default App;

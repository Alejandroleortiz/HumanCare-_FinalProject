import React, { useContext } from 'react'
import { GlobalContext } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';


function RecordsForm() {

    const { state: { store, actions } } = useContext(GlobalContext);

    const navigate = useNavigate();

    return (
        <>
            <form onSubmit={(e) => {
                console.log("estoy aqui", e);
                e.preventDefault();
                actions.uploadFile(e, navigate)
            }}>
                <input
                    type="file"
                    className="form-control border"
                    name='file'
                    id="file"
                    placeholder="Upload your file"
                // onChange={(newFile) => actions.setFile(newFile.target.files[0])}
                />
                <input
                    type="text"
                    className="form-control"
                    name='filename'
                    id="filename"
                    placeholder="Add your filename"
                // onChange={(newFilename) => actions.setFilemane(newFilename.target.value)}
                />
                <button type="submit" className="btn btn-sm btn-primary col-6 my-4">
                    Upload
                </button>
            </form>
        </>
    )
}

export default RecordsForm
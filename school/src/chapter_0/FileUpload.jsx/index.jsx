import { useRef, useState } from 'react';

const FileUpload = () => {
    const [Files, setFiles] = useState([]);
    const FileInputRef = useRef(null);
    const [showImage, setShowImage] = useState(null);
    const uploadProfile = (e) => {
        const Images = e.target.files;
        const UrlImages = [...Images];
        const nowImageList = [];

        UrlImages.forEach((data) => {
            const nowImageUrl = URL.createObjectURL(data);
            nowImageList.push(nowImageUrl);
        });
        setFiles(nowImageList);
    };

    const onUploadFile = () => {
        setShowImage((prev) => {
            return Files.map((data) => {
                return (
                    <div>
                        <img src={data} alt={'사진'}></img>
                    </div>
                );
            });
        });
    };

    return (
        <div>
            <input
                type="file"
                multiple={'multiple'}
                accept="image/jpg, image/jpeg, image/png"
                ref={FileInputRef}
                onChange={uploadProfile}
            />
            <button onClick={onUploadFile}>파일 업로드</button>
            {showImage}
        </div>
    );
};

export default FileUpload;

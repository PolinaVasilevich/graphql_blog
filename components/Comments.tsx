import { FC, useEffect, useState } from "react";

import moment from "moment";
import { getComments } from "../services";
import { IComment } from "../types/types";

interface ICommentsType {
  slug: string;
}

const Comments: FC<ICommentsType> = ({ slug }) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {/* {parse(comment.comment)} */}
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;

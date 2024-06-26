import { useParams } from "react-router-dom";
import useGetProductDiscussion from "../../features/details-product-discussion/hooks/use-get-product-discussion";
import DetailsDiscussHeaderComponent from "./details-discuss-header-component";
import useGetProductById from "../../features/product/hooks/use-get-product-by-id";
import DetailsDiscussMappingComponent from "./details-discuss-mapping-component";

import { useState } from "react";
import DetailsDiscussReplyComponent from "./details-discuss-reply-component";
import useReplyProductDiscussion from "../../features/details-product-discussion/hooks/use-reply-product-discussion";

const DetailsDiscussMobileComponent = () => {
  const { discussionId, productId } = useParams();
  const [replyMessage, setReplyMessage] = useState("");
  const { data } = useGetProductDiscussion(productId);
  const { currentProduct } = useGetProductById();
  const { replyProductDiscussion } = useReplyProductDiscussion();
  const discussionDataFiltered = data?.find((data) => data.discus_id === discussionId);
  const isEmptyString = !replyMessage || replyMessage.trim() === "" || replyMessage.trim().length === 0;

  const handleSendReply = async () => {
    if (isEmptyString) return;

    const data = {
      message: replyMessage,
    };
    replyProductDiscussion(discussionId, productId, data).then(() => setReplyMessage(""));
  };

  return (
    <section className="w-full">
      <DetailsDiscussHeaderComponent
        productOwnerId={currentProduct?.owner.owner_id}
        discussUserID={discussionDataFiltered?.user_id}
        created_at={discussionDataFiltered?.created_at}
        discus_message={discussionDataFiltered?.discus_message}
        discussUserName={discussionDataFiltered?.name}
        avatar={discussionDataFiltered?.avatar}
      />
      {discussionDataFiltered?.discus_reply.length > 0 && (
        <section className="w-full px-3 mt-5 capitalize">
          <h2 className="font-bold">komentar ({discussionDataFiltered?.discus_reply.length})</h2>
        </section>
      )}
      <DetailsDiscussMappingComponent discussReplyData={discussionDataFiltered?.discus_reply} productOwnerId={currentProduct?.owner.owner_id} />
      <DetailsDiscussReplyComponent inputDevaultValue={replyMessage} onChange={(e) => setReplyMessage(e.target.value)} onSend={handleSendReply} />
    </section>
  );
};
export default DetailsDiscussMobileComponent;

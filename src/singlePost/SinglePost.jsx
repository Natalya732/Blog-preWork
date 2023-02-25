import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="data:image/jpeg;base64,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"
          alt="
                "
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i class=" singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class=" singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Nikita</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga,
          debitis est quae reiciendis rem molestiae qui nemo laboriosam, dolorem
          dolore, aspernatur obcaecati! Est, dolor delectus repudiandae corporis
          nostrum laboriosam voluptas sit quia sint. Numquam eaque nisi dicta,
          natus labore ipsum at iure atque tempora debitis quibusdam placeat
          deserunt molestiae quos itaque sunt autem voluptates in ab, dolores
          quasi ex! Quisquam velit iure maxime, dolore neque recusandae cumque
          iusto expedita vitae! At expedita, nisi, quaerat blanditiis non, in
          quis excepturi a deleniti obcaecati itaque officiis! Repudiandae vero
          consequuntur est impedit error, perferendis amet ullam blanditiis
          maxime nobis laudantium possimus numquam sed, fuga veniam?
        </p>
      </div>
    </div>
  );
}
import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const currentComment = comments.find(
    (comment) => comment.id === parseInt(id)
  );
  if (!currentComment) {
    return new Response("Comment not found", { status: 404 });
  }
  return Response.json(currentComment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const currentComment = comments.find(
    (comment) => comment.id === parseInt(id)
  )

  if (!currentComment) {
    return new Response("Comment not found", { status: 404 });
  }

  currentComment.text = text;

  return Response.json(currentComment);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  const deletedComment = comments[index];

  if (!deletedComment) {
    return new Response("Comment not found", { status: 404 });
  }

  comments.splice(index, 1);

  return Response.json(deletedComment);
}

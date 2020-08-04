import { connect } from "mongoose";

export const CBD = (uri: string) =>
  connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

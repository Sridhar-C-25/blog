import { TextField, Typography } from "@mui/material";
import RichTextEditor from "../components/RichTextEditor";
import TagsInput from "../components/TagsInput.";

const NewStory = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "850px",
        margin: "1rem auto",
      }}
    >
      <Typography variant="h5">New Story</Typography>
      <br />

      <div className="!mb-5">
        <TextField
          required
          id="outlined-required"
          label="Title"
          sx={{ width: "100%" }}
          defaultValue="Hello World"
        />
      </div>
      <TagsInput />
      <br />
      <RichTextEditor></RichTextEditor>
      <div className="flex justify-end">
        <button className="!bg-green-600 mt-4 px-4 py-1.5 rounded-full text-white shadow-lg">
          Publish
        </button>
      </div>
    </div>
  );
};

export default NewStory;

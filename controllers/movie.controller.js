import Movies from "../model/movie.model.js";
import movieData from "../data/movie.json" assert { type: "json" };

const movieController = {};
const genreOptions = [
  "Action",
  "Romance",
  "Fantasy",
  "Drama",
  "Crime",
  "Adventure",
  "Thriller",
  "Sci-fi",
  "Music",
  "Family",
];
movieController.getMovies = async (req, res) => {
  let {
    page = 0,
    limit = 5,
    search = " ",
    sort = "rating",
    genre = "all",
  } = req.query;
  try {
    genre === "all" ? (genre = [...genreOptions]) : genre.split(",");
    sort ? (sort = sort.split(",")) : (sort = [sort]);
    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }
    const movies = await Movies.find()
      .where("genre")
      .in([...genre])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);
    const total = Movies.countDocuments({
      genre: { $in: [...genre] },
      name: { $regex: search, $options: "i" },
    });
    return res.status(200).json({ success: true, movies });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

movieController.postMovie = async (req, res) => {
  try {
    await Movies.insertMany(movieData);
    return res.status(200).json({ success: true, message: "inserted" });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

export default movieController;

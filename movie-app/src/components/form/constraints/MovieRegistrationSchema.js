import * as Yup from 'yup';

const MovieRegistrationSchema = Yup.object().shape({
    movie: Yup.object().shape({
        title: Yup.string()
                .min(2, 'Too Short!')
                .max(20, 'Too Long!')
                .required('Required'),
        poster_path: Yup.string()
                .min(2, 'Too Short!')
                .max(100, 'Too Long!')
                .required('Required'),
        overview: Yup.string()
                .min(2, 'Too Short!')
                .required('Required'),
        runtime: Yup.number()
                .required('Required'),
        genre: Yup.array()
                .required('Required'),
        release_date: Yup.date()
                .required('Required'),
    })
});

export default MovieRegistrationSchema;
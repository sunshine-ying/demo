import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';

import Movie from "../pages/movie";
import Book from "../pages/book";

export const TabNav = createBottomTabNavigator(
    {
        Movie:{screen : Movie},
        Book:{screen: Book}
    }
)

// export TabNav
import {
    getAllRoutes,
    getListOfRegions,
    getListOfSeasons
} from '../../models/model.js';

export default async (req, res) => {
    const selectedRegion = req.query.region || '';
    const selectedSeason = req.query.season || '';

    const regions = await getListOfRegions();
    const seasons = await getListOfSeasons();
    let routes = await getAllRoutes();

    if (selectedRegion) {
        routes = routes.filter(route =>
            String(route.region).toLowerCase() === selectedRegion.toLowerCase()
        );
    }

    if (selectedSeason) {
        routes = routes.filter(route =>
            Array.isArray(route.season)
                ? route.season.some(season =>
                    String(season).toLowerCase() === selectedSeason.toLowerCase()
                )
                : String(route.season).toLowerCase() === selectedSeason.toLowerCase()
        );
    }

    res.render('routes/list', {
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons,
        selectedRegion,
        selectedSeason
    });
};
export default {
    name: "LibraryIndexRoute",
    component: () =>
        import(
            /* webpackChunkName: "library-index" */ "@/app/views/library/LibraryIndex.vue"
        ),
    // children: [
    //     {
    //         path: ":id",
    //         name: "TemplateInfoRoute",
    //         component: () =>
    //             import(
    //                 /* webpackChunkName: "template-component" */ "@/modules/template/components/TemplateComponent.vue"
    //             ),
    //         props: true,
    //         meta: {
    //             requireId: true,
    //         }
    //     },
    // ],
};

<template>
    <nav class="navigation">
        <router-link to="/">{{capitalize("home")}}</router-link>
        <router-link to="/other">{{capitalize("other")}}</router-link>
    </nav>
</template>

<script lang="ts" setup>
import {useCustomFuncStore} from "../../stores/customFunctions"

const {capitalize} = useCustomFuncStore()
</script>

<style lang="scss" scoped>
    @import "../../css/variables";
    @import "../../css/mixins";

    .navigation {
        display: flex;
        gap: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
        
        a {
            @include light-outline;
            @include transition-property(color, box-shadow);
            @include text-color;

            font-weight: bold;
            text-decoration: none;
            padding: 0.5rem;
            border-radius: $small-radius;

            &:hover {
                @include text-color('white');
                @include neo-shadow-with-inner;
            }

            &.router-link-exact-active {
                @include text-color('white');
                @include light-outline($strong: true);
                
                text-decoration: underline;
            }
        }
    }
</style>
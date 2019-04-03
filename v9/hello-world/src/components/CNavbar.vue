<template>
    <nav>
        <ul>
            <li v-for="(item, index) in navItems" :key="index">
                <a v-bind:href="item.link">
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "CNavbar",
        data() {
            return {
                navItems: [ "Home", "About", "Contact"],
                navItems: [
                    {
                        name: "Home",
                        link: "http://www.google.com"
                    },
                    {
                        name: "About",
                        link: ""
                    },
                    {
                        name: "Contact",
                        link: ""
                    }
                ]
            }
        }
    }
</script>

export default function useRouter() {
    const push = (url: string) => window.location.replace(url)
    return {
        push   
    }
}
<script>
	import DeliveryMethod from "../components/DeliveryMethod.svelte";
	import bgImg from '$lib/img/bgImg.svg';
</script>

<section id="header" class="space-y-4">
    
    <div class="w-full h-64 rounded-3xl bg-slate-600" style={`background-image: url(${bgImg});`}>
        <h1 class="text-black text-center p-14 text-3xl capitalize font-bold">Welcome to AUL On Time</h1>
    </div>

    <div class="flex justify-between items-center flex-wrap gap-x-10 gap-y-3">
        <div>
            <h3 class="text-3xl font-bold">AUL On Time</h3>
            <span class="text-slate-500"> 09:30 am - 09:00 pm </span>
        </div>

        <DeliveryMethod />

    </div>


</section>

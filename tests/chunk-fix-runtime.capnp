using Workerd = import "/workerd/workerd.capnp";

const config :Workerd.Config = (
  services = [
    (name = "original-with-chunk-fix", worker = (
      compatibilityDate = "2024-03-01",
      compatibilityFlags = ["disallow_eval_during_startup"],
      modules = [
        (name = "test", esModule = embed "chunk-fix-runtime.mjs"),
        (name = "baseline", esModule = embed "../_worker.js"),
        (name = "fixed", esModule = embed "../_worker-chunk-fix.js")
      ]
    ))
  ]
);

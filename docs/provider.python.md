# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-github.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubProvider <a name="GithubProvider" id="@cdktf/provider-github.provider.GithubProvider"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs github}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.provider.GithubProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_github import provider

provider.GithubProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  app_auth: GithubProviderAppAuth = None,
  base_url: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  organization: str = None,
  owner: str = None,
  parallel_requests: typing.Union[bool, IResolvable] = None,
  read_delay_ms: typing.Union[int, float] = None,
  token: str = None,
  write_delay_ms: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.appAuth">app_auth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | app_auth block. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.baseUrl">base_url</a></code> | <code>str</code> | The GitHub Base API URL. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable `insecure` mode for testing purposes. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.owner">owner</a></code> | <code>str</code> | The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.parallelRequests">parallel_requests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the provider to make parallel API calls to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.readDelayMs">read_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Amount of time in milliseconds to sleep in between non-write requests to GitHub API. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | The OAuth token used to connect to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.writeDelayMs">write_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Amount of time in milliseconds to sleep in between writes to GitHub API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#alias GithubProvider#alias}

---

##### `app_auth`<sup>Optional</sup> <a name="app_auth" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.appAuth"></a>

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

app_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#app_auth GithubProvider#app_auth}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.baseUrl"></a>

- *Type:* str

The GitHub Base API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#base_url GithubProvider#base_url}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable `insecure` mode for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#insecure GithubProvider#insecure}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.organization"></a>

- *Type:* str

The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#organization GithubProvider#organization}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.owner"></a>

- *Type:* str

The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#owner GithubProvider#owner}

---

##### `parallel_requests`<sup>Optional</sup> <a name="parallel_requests" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.parallelRequests"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the provider to make parallel API calls to GitHub.

You may want to set it to true when you have a private Github Enterprise without strict rate limits. Although, it is not possible to enable this setting on github.com because we enforce the respect of github.com's best practices to avoid hitting abuse rate limitsDefaults to false if not set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#parallel_requests GithubProvider#parallel_requests}

---

##### `read_delay_ms`<sup>Optional</sup> <a name="read_delay_ms" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.readDelayMs"></a>

- *Type:* typing.Union[int, float]

Amount of time in milliseconds to sleep in between non-write requests to GitHub API.

Defaults to 0ms if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#read_delay_ms GithubProvider#read_delay_ms}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.token"></a>

- *Type:* str

The OAuth token used to connect to GitHub.

Anonymous mode is enabled if both `token` and `app_auth` are not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#token GithubProvider#token}

---

##### `write_delay_ms`<sup>Optional</sup> <a name="write_delay_ms" id="@cdktf/provider-github.provider.GithubProvider.Initializer.parameter.writeDelayMs"></a>

- *Type:* typing.Union[int, float]

Amount of time in milliseconds to sleep in between writes to GitHub API.

Defaults to 1000ms or 1s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#write_delay_ms GithubProvider#write_delay_ms}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetAppAuth">reset_app_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetParallelRequests">reset_parallel_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetReadDelayMs">reset_read_delay_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.resetWriteDelayMs">reset_write_delay_ms</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.provider.GithubProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.provider.GithubProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.provider.GithubProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.provider.GithubProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.provider.GithubProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.provider.GithubProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.provider.GithubProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.provider.GithubProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.provider.GithubProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-github.provider.GithubProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_app_auth` <a name="reset_app_auth" id="@cdktf/provider-github.provider.GithubProvider.resetAppAuth"></a>

```python
def reset_app_auth() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-github.provider.GithubProvider.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-github.provider.GithubProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-github.provider.GithubProvider.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-github.provider.GithubProvider.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_parallel_requests` <a name="reset_parallel_requests" id="@cdktf/provider-github.provider.GithubProvider.resetParallelRequests"></a>

```python
def reset_parallel_requests() -> None
```

##### `reset_read_delay_ms` <a name="reset_read_delay_ms" id="@cdktf/provider-github.provider.GithubProvider.resetReadDelayMs"></a>

```python
def reset_read_delay_ms() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-github.provider.GithubProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_write_delay_ms` <a name="reset_write_delay_ms" id="@cdktf/provider-github.provider.GithubProvider.resetWriteDelayMs"></a>

```python
def reset_write_delay_ms() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.provider.GithubProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import provider

provider.GithubProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.provider.GithubProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import provider

provider.GithubProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-github.provider.GithubProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_github import provider

provider.GithubProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.provider.GithubProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import provider

provider.GithubProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GithubProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GithubProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.provider.GithubProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GithubProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.appAuthInput">app_auth_input</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.parallelRequestsInput">parallel_requests_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.readDelayMsInput">read_delay_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.writeDelayMsInput">write_delay_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.appAuth">app_auth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.parallelRequests">parallel_requests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.readDelayMs">read_delay_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.writeDelayMs">write_delay_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.provider.GithubProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.provider.GithubProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.provider.GithubProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.provider.GithubProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-github.provider.GithubProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.provider.GithubProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.provider.GithubProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-github.provider.GithubProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-github.provider.GithubProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-github.provider.GithubProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `app_auth_input`<sup>Optional</sup> <a name="app_auth_input" id="@cdktf/provider-github.provider.GithubProvider.property.appAuthInput"></a>

```python
app_auth_input: GithubProviderAppAuth
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-github.provider.GithubProvider.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-github.provider.GithubProvider.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-github.provider.GithubProvider.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-github.provider.GithubProvider.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `parallel_requests_input`<sup>Optional</sup> <a name="parallel_requests_input" id="@cdktf/provider-github.provider.GithubProvider.property.parallelRequestsInput"></a>

```python
parallel_requests_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_delay_ms_input`<sup>Optional</sup> <a name="read_delay_ms_input" id="@cdktf/provider-github.provider.GithubProvider.property.readDelayMsInput"></a>

```python
read_delay_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-github.provider.GithubProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `write_delay_ms_input`<sup>Optional</sup> <a name="write_delay_ms_input" id="@cdktf/provider-github.provider.GithubProvider.property.writeDelayMsInput"></a>

```python
write_delay_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_auth`<sup>Optional</sup> <a name="app_auth" id="@cdktf/provider-github.provider.GithubProvider.property.appAuth"></a>

```python
app_auth: GithubProviderAppAuth
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-github.provider.GithubProvider.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-github.provider.GithubProvider.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-github.provider.GithubProvider.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.provider.GithubProvider.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `parallel_requests`<sup>Optional</sup> <a name="parallel_requests" id="@cdktf/provider-github.provider.GithubProvider.property.parallelRequests"></a>

```python
parallel_requests: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_delay_ms`<sup>Optional</sup> <a name="read_delay_ms" id="@cdktf/provider-github.provider.GithubProvider.property.readDelayMs"></a>

```python
read_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-github.provider.GithubProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `write_delay_ms`<sup>Optional</sup> <a name="write_delay_ms" id="@cdktf/provider-github.provider.GithubProvider.property.writeDelayMs"></a>

```python
write_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.provider.GithubProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GithubProviderAppAuth <a name="GithubProviderAppAuth" id="@cdktf/provider-github.provider.GithubProviderAppAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.provider.GithubProviderAppAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_github import provider

provider.GithubProviderAppAuth(
  id: str,
  installation_id: str,
  pem_file: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.id">id</a></code> | <code>str</code> | The GitHub App ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.installationId">installation_id</a></code> | <code>str</code> | The GitHub App installation instance ID. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth.property.pemFile">pem_file</a></code> | <code>str</code> | The GitHub App PEM file contents. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.id"></a>

```python
id: str
```

- *Type:* str

The GitHub App ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#id GithubProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

The GitHub App installation instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#installation_id GithubProvider#installation_id}

---

##### `pem_file`<sup>Required</sup> <a name="pem_file" id="@cdktf/provider-github.provider.GithubProviderAppAuth.property.pemFile"></a>

```python
pem_file: str
```

- *Type:* str

The GitHub App PEM file contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#pem_file GithubProvider#pem_file}

---

### GithubProviderConfig <a name="GithubProviderConfig" id="@cdktf/provider-github.provider.GithubProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.provider.GithubProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import provider

provider.GithubProviderConfig(
  alias: str = None,
  app_auth: GithubProviderAppAuth = None,
  base_url: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  organization: str = None,
  owner: str = None,
  parallel_requests: typing.Union[bool, IResolvable] = None,
  read_delay_ms: typing.Union[int, float] = None,
  token: str = None,
  write_delay_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.appAuth">app_auth</a></code> | <code><a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a></code> | app_auth block. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.baseUrl">base_url</a></code> | <code>str</code> | The GitHub Base API URL. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable `insecure` mode for testing purposes. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.organization">organization</a></code> | <code>str</code> | The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.owner">owner</a></code> | <code>str</code> | The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.parallelRequests">parallel_requests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the provider to make parallel API calls to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.readDelayMs">read_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Amount of time in milliseconds to sleep in between non-write requests to GitHub API. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.token">token</a></code> | <code>str</code> | The OAuth token used to connect to GitHub. |
| <code><a href="#@cdktf/provider-github.provider.GithubProviderConfig.property.writeDelayMs">write_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Amount of time in milliseconds to sleep in between writes to GitHub API. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-github.provider.GithubProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#alias GithubProvider#alias}

---

##### `app_auth`<sup>Optional</sup> <a name="app_auth" id="@cdktf/provider-github.provider.GithubProviderConfig.property.appAuth"></a>

```python
app_auth: GithubProviderAppAuth
```

- *Type:* <a href="#@cdktf/provider-github.provider.GithubProviderAppAuth">GithubProviderAppAuth</a>

app_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#app_auth GithubProvider#app_auth}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-github.provider.GithubProviderConfig.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

The GitHub Base API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#base_url GithubProvider#base_url}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-github.provider.GithubProviderConfig.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable `insecure` mode for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#insecure GithubProvider#insecure}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-github.provider.GithubProviderConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#organization GithubProvider#organization}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.provider.GithubProviderConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#owner GithubProvider#owner}

---

##### `parallel_requests`<sup>Optional</sup> <a name="parallel_requests" id="@cdktf/provider-github.provider.GithubProviderConfig.property.parallelRequests"></a>

```python
parallel_requests: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the provider to make parallel API calls to GitHub.

You may want to set it to true when you have a private Github Enterprise without strict rate limits. Although, it is not possible to enable this setting on github.com because we enforce the respect of github.com's best practices to avoid hitting abuse rate limitsDefaults to false if not set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#parallel_requests GithubProvider#parallel_requests}

---

##### `read_delay_ms`<sup>Optional</sup> <a name="read_delay_ms" id="@cdktf/provider-github.provider.GithubProviderConfig.property.readDelayMs"></a>

```python
read_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of time in milliseconds to sleep in between non-write requests to GitHub API.

Defaults to 0ms if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#read_delay_ms GithubProvider#read_delay_ms}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-github.provider.GithubProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

The OAuth token used to connect to GitHub.

Anonymous mode is enabled if both `token` and `app_auth` are not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#token GithubProvider#token}

---

##### `write_delay_ms`<sup>Optional</sup> <a name="write_delay_ms" id="@cdktf/provider-github.provider.GithubProviderConfig.property.writeDelayMs"></a>

```python
write_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of time in milliseconds to sleep in between writes to GitHub API.

Defaults to 1000ms or 1s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs#write_delay_ms GithubProvider#write_delay_ms}

---




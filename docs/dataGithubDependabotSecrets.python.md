# `data_github_dependabot_secrets`

Refer to the Terraform Registory for docs: [`data_github_dependabot_secrets`](https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets).

# `dataGithubDependabotSecrets` Submodule <a name="`dataGithubDependabotSecrets` Submodule" id="@cdktf/provider-github.dataGithubDependabotSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubDependabotSecrets <a name="DataGithubDependabotSecrets" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets github_dependabot_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_dependabot_secrets

dataGithubDependabotSecrets.DataGithubDependabotSecrets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  full_name: str = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#full_name DataGithubDependabotSecrets#full_name}. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#id DataGithubDependabotSecrets#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#name DataGithubDependabotSecrets#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#full_name DataGithubDependabotSecrets#full_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#id DataGithubDependabotSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#name DataGithubDependabotSecrets#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGithubDependabotSecrets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_dependabot_secrets

dataGithubDependabotSecrets.DataGithubDependabotSecrets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_dependabot_secrets

dataGithubDependabotSecrets.DataGithubDependabotSecrets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_dependabot_secrets

dataGithubDependabotSecrets.DataGithubDependabotSecrets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import data_github_dependabot_secrets

dataGithubDependabotSecrets.DataGithubDependabotSecrets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGithubDependabotSecrets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGithubDependabotSecrets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGithubDependabotSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubDependabotSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList">DataGithubDependabotSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.secrets"></a>

```python
secrets: DataGithubDependabotSecretsSecretsList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList">DataGithubDependabotSecretsSecretsList</a>

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecrets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubDependabotSecretsConfig <a name="DataGithubDependabotSecretsConfig" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_dependabot_secrets

dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  full_name: str = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#full_name DataGithubDependabotSecrets#full_name}. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#id DataGithubDependabotSecrets#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#name DataGithubDependabotSecrets#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#full_name DataGithubDependabotSecrets#full_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#id DataGithubDependabotSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/data-sources/dependabot_secrets#name DataGithubDependabotSecrets#name}.

---

### DataGithubDependabotSecretsSecrets <a name="DataGithubDependabotSecretsSecrets" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_dependabot_secrets

dataGithubDependabotSecrets.DataGithubDependabotSecretsSecrets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubDependabotSecretsSecretsList <a name="DataGithubDependabotSecretsSecretsList" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_dependabot_secrets

dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubDependabotSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubDependabotSecretsSecretsOutputReference <a name="DataGithubDependabotSecretsSecretsOutputReference" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_dependabot_secrets

dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecrets">DataGithubDependabotSecretsSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecretsOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubDependabotSecretsSecrets
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubDependabotSecrets.DataGithubDependabotSecretsSecrets">DataGithubDependabotSecretsSecrets</a>

---




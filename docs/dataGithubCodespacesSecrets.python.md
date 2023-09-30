# `data_github_codespaces_secrets`

Refer to the Terraform Registory for docs: [`data_github_codespaces_secrets`](https://registry.terraform.io/providers/integrations/github/5.39.0/docs/data-sources/codespaces_secrets).

# `dataGithubCodespacesSecrets` Submodule <a name="`dataGithubCodespacesSecrets` Submodule" id="@cdktf/provider-github.dataGithubCodespacesSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubCodespacesSecrets <a name="DataGithubCodespacesSecrets" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/data-sources/codespaces_secrets github_codespaces_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_codespaces_secrets

dataGithubCodespacesSecrets.DataGithubCodespacesSecrets(
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
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.fullName">full_name</a></code> | <code>str</code> | Full name of the repository (in `org/name` format). |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/data-sources/codespaces_secrets#id DataGithubCodespacesSecrets#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the repository. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.fullName"></a>

- *Type:* str

Full name of the repository (in `org/name` format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/data-sources/codespaces_secrets#full_name DataGithubCodespacesSecrets#full_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/data-sources/codespaces_secrets#id DataGithubCodespacesSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.Initializer.parameter.name"></a>

- *Type:* str

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/data-sources/codespaces_secrets#name DataGithubCodespacesSecrets#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_codespaces_secrets

dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_codespaces_secrets

dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_codespaces_secrets

dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList">DataGithubCodespacesSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.secrets"></a>

```python
secrets: DataGithubCodespacesSecretsSecretsList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList">DataGithubCodespacesSecretsSecretsList</a>

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecrets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubCodespacesSecretsConfig <a name="DataGithubCodespacesSecretsConfig" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_codespaces_secrets

dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig(
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
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.fullName">full_name</a></code> | <code>str</code> | Full name of the repository (in `org/name` format). |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/data-sources/codespaces_secrets#id DataGithubCodespacesSecrets#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.name">name</a></code> | <code>str</code> | The name of the repository. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Full name of the repository (in `org/name` format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/data-sources/codespaces_secrets#full_name DataGithubCodespacesSecrets#full_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/data-sources/codespaces_secrets#id DataGithubCodespacesSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/data-sources/codespaces_secrets#name DataGithubCodespacesSecrets#name}

---

### DataGithubCodespacesSecretsSecrets <a name="DataGithubCodespacesSecretsSecrets" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_codespaces_secrets

dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecrets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubCodespacesSecretsSecretsList <a name="DataGithubCodespacesSecretsSecretsList" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_codespaces_secrets

dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubCodespacesSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubCodespacesSecretsSecretsOutputReference <a name="DataGithubCodespacesSecretsSecretsOutputReference" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_codespaces_secrets

dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecrets">DataGithubCodespacesSecretsSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecretsOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubCodespacesSecretsSecrets
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesSecrets.DataGithubCodespacesSecretsSecrets">DataGithubCodespacesSecretsSecrets</a>

---




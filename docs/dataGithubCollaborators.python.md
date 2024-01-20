# `dataGithubCollaborators` Submodule <a name="`dataGithubCollaborators` Submodule" id="@cdktf/provider-github.dataGithubCollaborators"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubCollaborators <a name="DataGithubCollaborators" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators github_collaborators}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_collaborators

dataGithubCollaborators.DataGithubCollaborators(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  owner: str,
  repository: str,
  affiliation: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#owner DataGithubCollaborators#owner}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#repository DataGithubCollaborators#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.affiliation">affiliation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#affiliation DataGithubCollaborators#affiliation}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#id DataGithubCollaborators#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#owner DataGithubCollaborators#owner}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#repository DataGithubCollaborators#repository}.

---

##### `affiliation`<sup>Optional</sup> <a name="affiliation" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.affiliation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#affiliation DataGithubCollaborators#affiliation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#id DataGithubCollaborators#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetAffiliation">reset_affiliation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_affiliation` <a name="reset_affiliation" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetAffiliation"></a>

```python
def reset_affiliation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGithubCollaborators resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_collaborators

dataGithubCollaborators.DataGithubCollaborators.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_collaborators

dataGithubCollaborators.DataGithubCollaborators.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_collaborators

dataGithubCollaborators.DataGithubCollaborators.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import data_github_collaborators

dataGithubCollaborators.DataGithubCollaborators.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGithubCollaborators resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGithubCollaborators to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGithubCollaborators that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubCollaborators to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.collaborator">collaborator</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList">DataGithubCollaboratorsCollaboratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliationInput">affiliation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliation">affiliation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `collaborator`<sup>Required</sup> <a name="collaborator" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.collaborator"></a>

```python
collaborator: DataGithubCollaboratorsCollaboratorList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList">DataGithubCollaboratorsCollaboratorList</a>

---

##### `affiliation_input`<sup>Optional</sup> <a name="affiliation_input" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliationInput"></a>

```python
affiliation_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `affiliation`<sup>Required</sup> <a name="affiliation" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliation"></a>

```python
affiliation: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubCollaboratorsCollaborator <a name="DataGithubCollaboratorsCollaborator" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_collaborators

dataGithubCollaborators.DataGithubCollaboratorsCollaborator()
```


### DataGithubCollaboratorsConfig <a name="DataGithubCollaboratorsConfig" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_collaborators

dataGithubCollaborators.DataGithubCollaboratorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  owner: str,
  repository: str,
  affiliation: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#owner DataGithubCollaborators#owner}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#repository DataGithubCollaborators#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.affiliation">affiliation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#affiliation DataGithubCollaborators#affiliation}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#id DataGithubCollaborators#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#owner DataGithubCollaborators#owner}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#repository DataGithubCollaborators#repository}.

---

##### `affiliation`<sup>Optional</sup> <a name="affiliation" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.affiliation"></a>

```python
affiliation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#affiliation DataGithubCollaborators#affiliation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/collaborators#id DataGithubCollaborators#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGithubCollaboratorsCollaboratorList <a name="DataGithubCollaboratorsCollaboratorList" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_collaborators

dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubCollaboratorsCollaboratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubCollaboratorsCollaboratorOutputReference <a name="DataGithubCollaboratorsCollaboratorOutputReference" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_collaborators

dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.eventsUrl">events_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followersUrl">followers_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followingUrl">following_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.gistsUrl">gists_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.organizationsUrl">organizations_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.receivedEventsUrl">received_events_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.reposUrl">repos_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.siteAdmin">site_admin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.starredUrl">starred_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.subscriptionsUrl">subscriptions_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator">DataGithubCollaboratorsCollaborator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events_url`<sup>Required</sup> <a name="events_url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.eventsUrl"></a>

```python
events_url: str
```

- *Type:* str

---

##### `followers_url`<sup>Required</sup> <a name="followers_url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followersUrl"></a>

```python
followers_url: str
```

- *Type:* str

---

##### `following_url`<sup>Required</sup> <a name="following_url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followingUrl"></a>

```python
following_url: str
```

- *Type:* str

---

##### `gists_url`<sup>Required</sup> <a name="gists_url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.gistsUrl"></a>

```python
gists_url: str
```

- *Type:* str

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `organizations_url`<sup>Required</sup> <a name="organizations_url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.organizationsUrl"></a>

```python
organizations_url: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `received_events_url`<sup>Required</sup> <a name="received_events_url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.receivedEventsUrl"></a>

```python
received_events_url: str
```

- *Type:* str

---

##### `repos_url`<sup>Required</sup> <a name="repos_url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.reposUrl"></a>

```python
repos_url: str
```

- *Type:* str

---

##### `site_admin`<sup>Required</sup> <a name="site_admin" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.siteAdmin"></a>

```python
site_admin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `starred_url`<sup>Required</sup> <a name="starred_url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.starredUrl"></a>

```python
starred_url: str
```

- *Type:* str

---

##### `subscriptions_url`<sup>Required</sup> <a name="subscriptions_url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.subscriptionsUrl"></a>

```python
subscriptions_url: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubCollaboratorsCollaborator
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator">DataGithubCollaboratorsCollaborator</a>

---




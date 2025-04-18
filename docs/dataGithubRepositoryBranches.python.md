# `dataGithubRepositoryBranches` Submodule <a name="`dataGithubRepositoryBranches` Submodule" id="@cdktf/provider-github.dataGithubRepositoryBranches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryBranches <a name="DataGithubRepositoryBranches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches github_repository_branches}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_branches

dataGithubRepositoryBranches.DataGithubRepositoryBranches(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: str,
  id: str = None,
  only_non_protected_branches: typing.Union[bool, IResolvable] = None,
  only_protected_branches: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#repository DataGithubRepositoryBranches#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#id DataGithubRepositoryBranches#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.onlyNonProtectedBranches">only_non_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#only_non_protected_branches DataGithubRepositoryBranches#only_non_protected_branches}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.onlyProtectedBranches">only_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#only_protected_branches DataGithubRepositoryBranches#only_protected_branches}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#repository DataGithubRepositoryBranches#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#id DataGithubRepositoryBranches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `only_non_protected_branches`<sup>Optional</sup> <a name="only_non_protected_branches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.onlyNonProtectedBranches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#only_non_protected_branches DataGithubRepositoryBranches#only_non_protected_branches}.

---

##### `only_protected_branches`<sup>Optional</sup> <a name="only_protected_branches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.onlyProtectedBranches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#only_protected_branches DataGithubRepositoryBranches#only_protected_branches}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOnlyNonProtectedBranches">reset_only_non_protected_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOnlyProtectedBranches">reset_only_protected_branches</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_only_non_protected_branches` <a name="reset_only_non_protected_branches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOnlyNonProtectedBranches"></a>

```python
def reset_only_non_protected_branches() -> None
```

##### `reset_only_protected_branches` <a name="reset_only_protected_branches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOnlyProtectedBranches"></a>

```python
def reset_only_protected_branches() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGithubRepositoryBranches resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_branches

dataGithubRepositoryBranches.DataGithubRepositoryBranches.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_branches

dataGithubRepositoryBranches.DataGithubRepositoryBranches.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_branches

dataGithubRepositoryBranches.DataGithubRepositoryBranches.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_branches

dataGithubRepositoryBranches.DataGithubRepositoryBranches.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGithubRepositoryBranches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGithubRepositoryBranches to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGithubRepositoryBranches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryBranches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList">DataGithubRepositoryBranchesBranchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyNonProtectedBranchesInput">only_non_protected_branches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyProtectedBranchesInput">only_protected_branches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyNonProtectedBranches">only_non_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyProtectedBranches">only_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.branches"></a>

```python
branches: DataGithubRepositoryBranchesBranchesList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList">DataGithubRepositoryBranchesBranchesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `only_non_protected_branches_input`<sup>Optional</sup> <a name="only_non_protected_branches_input" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyNonProtectedBranchesInput"></a>

```python
only_non_protected_branches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `only_protected_branches_input`<sup>Optional</sup> <a name="only_protected_branches_input" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyProtectedBranchesInput"></a>

```python
only_protected_branches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `only_non_protected_branches`<sup>Required</sup> <a name="only_non_protected_branches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyNonProtectedBranches"></a>

```python
only_non_protected_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `only_protected_branches`<sup>Required</sup> <a name="only_protected_branches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyProtectedBranches"></a>

```python
only_protected_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryBranchesBranches <a name="DataGithubRepositoryBranchesBranches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranches.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_branches

dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranches()
```


### DataGithubRepositoryBranchesConfig <a name="DataGithubRepositoryBranchesConfig" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_branches

dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: str,
  id: str = None,
  only_non_protected_branches: typing.Union[bool, IResolvable] = None,
  only_protected_branches: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#repository DataGithubRepositoryBranches#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#id DataGithubRepositoryBranches#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.onlyNonProtectedBranches">only_non_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#only_non_protected_branches DataGithubRepositoryBranches#only_non_protected_branches}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.onlyProtectedBranches">only_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#only_protected_branches DataGithubRepositoryBranches#only_protected_branches}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#repository DataGithubRepositoryBranches#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#id DataGithubRepositoryBranches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `only_non_protected_branches`<sup>Optional</sup> <a name="only_non_protected_branches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.onlyNonProtectedBranches"></a>

```python
only_non_protected_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#only_non_protected_branches DataGithubRepositoryBranches#only_non_protected_branches}.

---

##### `only_protected_branches`<sup>Optional</sup> <a name="only_protected_branches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.onlyProtectedBranches"></a>

```python
only_protected_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_branches#only_protected_branches DataGithubRepositoryBranches#only_protected_branches}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryBranchesBranchesList <a name="DataGithubRepositoryBranchesBranchesList" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_branches

dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubRepositoryBranchesBranchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubRepositoryBranchesBranchesOutputReference <a name="DataGithubRepositoryBranchesBranchesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_branches

dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.protected">protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranches">DataGithubRepositoryBranchesBranches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.protected"></a>

```python
protected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubRepositoryBranchesBranches
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranches">DataGithubRepositoryBranchesBranches</a>

---




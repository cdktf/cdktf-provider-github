# `dataGithubOrganizationRepositoryRole` Submodule <a name="`dataGithubOrganizationRepositoryRole` Submodule" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationRepositoryRole <a name="DataGithubOrganizationRepositoryRole" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_repository_role github_organization_repository_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationRepositoryRole(Construct Scope, string Id, DataGithubOrganizationRepositoryRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig">DataGithubOrganizationRepositoryRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig">DataGithubOrganizationRepositoryRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubOrganizationRepositoryRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationRepositoryRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationRepositoryRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationRepositoryRole.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationRepositoryRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGithubOrganizationRepositoryRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubOrganizationRepositoryRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubOrganizationRepositoryRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_repository_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationRepositoryRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.baseRole">BaseRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.roleIdInput">RoleIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.roleId">RoleId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BaseRole`<sup>Required</sup> <a name="BaseRole" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.baseRole"></a>

```csharp
public string BaseRole { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.roleIdInput"></a>

```csharp
public double RoleIdInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.roleId"></a>

```csharp
public double RoleId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationRepositoryRoleConfig <a name="DataGithubOrganizationRepositoryRoleConfig" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationRepositoryRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double RoleId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.roleId">RoleId</a></code> | <code>double</code> | The ID of the organization repository role. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_repository_role#id DataGithubOrganizationRepositoryRole#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.roleId"></a>

```csharp
public double RoleId { get; set; }
```

- *Type:* double

The ID of the organization repository role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_repository_role#role_id DataGithubOrganizationRepositoryRole#role_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganizationRepositoryRole.DataGithubOrganizationRepositoryRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/organization_repository_role#id DataGithubOrganizationRepositoryRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



